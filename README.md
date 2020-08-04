# Create an emr cluster

To create a new cluster: 
```
aws emr create-cluster --applications Name=Hadoop Name=Hive Name=Hue Name=Mahout Name=Pig Name=Tez --ec2-attributes '{"InstanceProfile":"EMR_EC2_DefaultRole","SubnetId":"subnet-873e96ee","EmrManagedSlaveSecurityGroup":"sg-09954302b12ed1e36","EmrManagedMasterSecurityGroup":"sg-010d36b3f90270b4a"}' --service-role EMR_DefaultRole --enable-debugging --release-label emr-5.30.1 --log-uri 's3n://aws-logs-565579547461-eu-west-3/elasticmapreduce/' --name 'My cluster' --instance-groups '[{"InstanceCount":1,"EbsConfiguration":{"EbsBlockDeviceConfigs":[{"VolumeSpecification":{"SizeInGB":32,"VolumeType":"gp2"},"VolumesPerInstance":2}]},"InstanceGroupType":"MASTER","InstanceType":"m5.xlarge","Name":"Master Instance Group"}]' --scale-down-behavior TERMINATE_AT_TASK_COMPLETION --region eu-west-3
```
