pipeline {
  agent any
  stages {
    stage('Deploy') {
      steps {
        sh '''#!/bin/sh
ssh root@18.218.229.217 <<EOF
 cd /home/ec2-user/nodecicd
 git pull
 pm2 restart all
 exit
EOF'''
      }
    }
  }
}