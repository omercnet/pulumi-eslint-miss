import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

type MyResourceInput = {
  someInput: pulumi.Input<string>;
};

const myBucket = new aws.s3.Bucket("myBucket");
const bucketArn = myBucket.arn;
const someInterpolatedString = `${bucketArn}`;

const input: MyResourceInput = { someInput: `${bucketArn}` };
