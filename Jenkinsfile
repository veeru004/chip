@Library('piper-lib-os@master') _
node(){
  stage('Prepare')   {
      deleteDir()
      checkout scm
  }

  stage('Build')   {
      mtaBuild script:this
  }

  stage('Acceptance')   {
      cloudFoundryDeploy script:this
  }
}
