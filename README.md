# This is a socialwell web design system

## Installation

```bash
yarn add socialwell-design

or

npm i socialwell-design
```

## How to use

```JSX
import { Button } from "socialwell-design";

<Button
  name="Button"
  variant="solid" // solid | outline
  size="md" // md | lg
/>
```


## Containerization

## To build image without spinning up the conatiner

docker build -f Dockerfile . -t socialwell/socialwell-design:<tag version>

## Build socialwell-design docker image and spin up the container to test on localhost:6006

docker-compose up

