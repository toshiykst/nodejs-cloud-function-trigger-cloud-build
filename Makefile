deploy:
	yarn build
	cp package.json dist && cp yarn.lock dist
	gcloud functions deploy triggerCloudBuild --source dist --entry-point triggerCloudBuild --runtime nodejs12 --trigger-http --allow-unauthenticated
