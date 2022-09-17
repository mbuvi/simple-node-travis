const my_docker_hub = process.env.MY_DOCKER_HUB;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`My dockerhub is ${my_docker_hub}`);
    await sleep(5000);
  }
}

main();