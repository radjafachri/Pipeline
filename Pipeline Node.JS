pipeline {
      agent {
        node{
            label 'node'
            customWorkspace '/home/radja'
        }
    }
  environment {
    NODE_ENV_PATH = './venv'
    NODE_VERSION = '14.20.0'
  }
  stages {
    stage('Pre-cleanup') {
      steps {      
        sh 'rm -rf ./node_modules'
        sh 'rm -rf node_modules'
      }
    }
  stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run & list') {
      steps {
        sh 'pm2 stop app'
        sh 'pm2 start app'
        sh 'pm2 list'
      }
    }
  }
  post {
    failure {
      echo 'Processing failed'
    }
    success {
      echo 'Processing succeeded'
    }
  }
}
