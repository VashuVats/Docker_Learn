Dockerize the App::
The node application is packaged into a Docker container using a Dockerfile.

GitHub Actions::
A GitHub Actions workflow is set up to:
--Build the Docker image.
--Push the image to DockerHub.

Automated Deployment::
Every push to the main branch triggers the CI/CD pipeline to update the Docker image on DockerHub.

