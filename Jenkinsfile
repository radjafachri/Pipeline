pipeline {
    agent any 
    stages {
        stage('Clone the repo') {
            steps {
                echo 'clone the repo'
                sh 'rm -fr Pipeline'
                sh 'git clone https://github.com/radjafachri/Pipeline.git'
            }
        }
        stage('push repo to remote host') {
            steps {
                echo 'connect to remote host and pull down the latest version'
                sh 'rsync -avzyhe "ssh -i /var/lib/jenkins/radja.pem" ~/workspace/Webhooks1 root@116.204.249.61:/var/www/html'
            }
        }
        stage('Check website is up') {
            steps {
                echo 'Check website is up'
                sh 'curl -Is 116.204.249.61 | head -n 1'
            }
        }
    }
}
