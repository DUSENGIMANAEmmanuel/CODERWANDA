
pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting application source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'

                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running application tests...'

                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: All pipeline stages completed!'
        }

        failure {
            echo 'FAILED: Please check the errors.'
        }
    }
}
