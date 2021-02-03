deploy:
	yarn build && gcloud functions deploy triggerCloudBuild --source dist --entry-point triggerCloudBuild --runtime nodejs12 --trigger-http --allow-unauthenticated