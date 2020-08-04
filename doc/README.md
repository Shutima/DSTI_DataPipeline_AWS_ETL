# Data pipeline

## Packaging of jar application

see https://github.com/jlcanela/dsti-samples

[github actions](https://github.com/jlcanela/dsti-samples/blob/master/.github/workflows/scala.yml)
 to build the jar 

## Creation of the cluster 

see https://github.com/jlcanela/aws-emr-template

Goal: run a batch with an EMR cluster 

To list existing clusters:
```
git clone https://github.com/jlcanela/aws-emr-template
npm install
./cli list-emr
```

## Add a new step in the cluster ~ start the job

Very similar to local run: 
```
 ~/opt/spark-3.0.0-bin-hadoop2.7/bin/spark-submit  --master "local[*]" --conf spark.driver.memory=3g target/scala-2.12/spark-sbt-template-assembly-1.0.jar  process
```

```
~/opt/spark-3.0.0-bin-hadoop2.7/bin/spark-submit --master "local[*]" --class data.pipeline.App target/scala-2.12/spark-sbt-template-assembly-1.0.jar process
```

Using the parameters in the Cloud: 
* Step type : "Spark application"
* Name : "DSTI-Job"
* Deploy mode: "Client"
* Spark-submit options: --class data.pipeline.App

## For python job

You can either : 
* Use specific AMI to includes specific binaries you want to use => python utils
* Using a bootstrap action => to deploy specific modules

Included in py-spark already a python interpreter 


## Using aws-cli 

https://aws.amazon.com/cli/

```
aws emr describe-cluster --cluster-id j-3SWZ5F383FCHB
```