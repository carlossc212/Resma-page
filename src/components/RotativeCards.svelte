<script>
  import { blur } from "svelte/transition";
  import { onMount, tick, onDestroy } from "svelte";

  export let duration;
  export let slides;

  let currentSlide = 0;
  let sliderElement; 
  let interval;

  const nextSlide = () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    timer();
  };

  const goToSlide = (i) => {
    currentSlide = i;
    clearInterval(interval);
  };

  
  const timer = () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, duration);
  };

  const updateSliderHeight = () => {
    const activeSlide = document.querySelector(`#service-${currentSlide}`);
    if (activeSlide && sliderElement) {
      // Obtener altura real del slide actual
      const slideHeight = activeSlide.scrollHeight; // Altura total del contenido del slide
      sliderElement.style.height = `${slideHeight}px`;
    }
  };

  onMount(() => {
    updateSliderHeight();
    timer();

    window.addEventListener("resize", updateSliderHeight);
  });

  onDestroy(() => {
    window.removeEventListener("resize", updateSliderHeight);
  });

  tick().then(() => {
    updateSliderHeight();
  });
</script>

<div bind:this={sliderElement} class="slider">
  {#each slides as slider, i}
    {#if currentSlide === i}
      <div id="service-{currentSlide}" class="slide" transition:blur={{ amount: 10 }}>
        <div class="service">
          <div class="card-header">
            <img class="image" src="{slider.src}" alt="{slider.alt}" on:load={updateSliderHeight} />
          </div>
          <div class="card-body">
            <h5>{slider.title}</h5>
            <p>{slider.description}</p>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    {/if}
  {/each}

  <div class="nav">
    {#each slides, i}
      <button
        aria-label="Go to slide {i + 1}"
        class="bubble"
        on:click={() => goToSlide(i)}
        class:current={i === currentSlide}
        class:onedown={i === currentSlide - 1}
        class:twodown={i === currentSlide - 2}
        class:oneup={i === currentSlide + 1}
        class:twoup={i === currentSlide + 2}
      ></button>
    {/each}
  </div>
</div>

<style>
  .slider {
    width: 100%;
    display: inline-block;
    position: relative;
    transition: height 0.3s ease; /* Transición suave para la altura */
  }
  .slide {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .nav {
    height: 5%;
    z-index: 3;
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(100% + 10px);
  }
  .bubble {
    padding: 0;
    border: 0;
    height: 20px;
    width: 10px;
    border-radius: 100px;
    transition: all 0.3s ease-out;
    opacity: 0.2;
    cursor: pointer;
    background-color: black;
  }
  .current {
    height: 80%;
    opacity: 0.8;
  }
  .onedown,
  .oneup {
    height: 60%;
  }
  .twodown,
  .twoup {
    height: 40%;
  }
  .service {
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.35);    border-radius: 20px;
    width: 100%;
    transition: transform 0.3s ease;
    &:hover .image{
      transform: scale(1.2);
    }
  }

  .card-header{
    overflow: hidden;
    mask-image: linear-gradient(to bottom,
      rgb(0, 0, 0) 94%,
      rgba(0, 0, 0, 0.9) 95%,
      rgba(0, 0, 0, 0.2) 98%,
      transparent 100%);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .image {
    width: 100%;
    
    aspect-ratio: 16/9;
    
    transition: transform 0.3s ease;

  }
  .card-body {
    color: black;
    padding: 20px;
  }
  h5 {
    font-size: 1.6rem;
    text-align: center;
    margin: 0;
  }
  
  @media screen and (max-width:992px){
    h5{
      font-size: clamp(1.2rem, 1.001rem + 0.967vw, 1.6rem);
    }
  }
</style>
