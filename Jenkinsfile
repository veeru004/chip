@Library('piper-lib-os@master') _
node(){
  stage('Prepare')   {
      deleteDir()
      checkout scm
      setupCommonPipelineEnvironment script:this
  }

  stage('Build')   {
      mtaBuild script:this
  }

  stage('Acceptance')   {
      cloudFoundryDeploy script:this
  }
}
