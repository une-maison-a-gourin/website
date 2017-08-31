#!/bin/bash

CRUMB=$(curl -s $"http://$JENKINS_USERNAME:$JENKINS_TOKEN@$JENKINS_HOST/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)")
curl -H "$CRUMB" "http://$JENKINS_USERNAME:$JENKINS_TOKEN@$JENKINS_HOST/job/deploy-to-prod/build?token=$JENKINS_TOKEN&cause=$TRAVIS_BRANCH+%20+$TRAVIS_COMMIT";
