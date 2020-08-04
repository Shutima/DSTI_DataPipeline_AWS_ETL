import AWS, { EMR }  from 'aws-sdk';
import { program } from 'commander';
import { logger } from '../utils';
program.version('1.0.0');

const region = "eu-west-3";

async function createEmr(name: string) {
  const emr = new AWS.EMR({ region });

  const instances: EMR.JobFlowInstancesConfig =  {
    InstanceCount: 1,
    MasterInstanceType: "m5.xlarge",
  };

  const params: EMR.RunJobFlowInput = { 
    Name: name,
    Instances: instances,
    JobFlowRole: "EMR_EC2_DefaultRole",
    ServiceRole: "EMR_DefaultRole",
    ReleaseLabel: "emr-5.30.1",     
  }; 

  try {
    const result = await emr.runJobFlow(params).promise();
    logger.info(JSON.stringify(result, null, 4));
  
  } catch(ex) {
    logger.error(ex);
  }
}

async function listEmr() {
  try {
    const emr = new AWS.EMR({ region });
    const result = await emr.listClusters().promise();
    logger.info(JSON.stringify(result, null, 4));  
  } catch(ex) {
    logger.error(ex);
  }
}

program
  .command('create-emr <name>')
  .description('create an emr cluster')
  .action(async (name) => {
    logger.info('creating emr cluster');
    await createEmr(name);
  });

program
  .command('list-emr')
  .description('display all emr clusters')
  .action(async () => {
    logger.info('list emr clusters');
    await listEmr();
  });

program.parse(process.argv);
