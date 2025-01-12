<script>
  import { blur } from "svelte/transition";
  import { onMount, tick, onDestroy } from "svelte";

  export let duration;
  export let slides;

  let currentSlide = 0;
  let sliderElement; // Referencia al contenedor del slider

  // Función para ir al siguiente slide
  const nextSlide = () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    timer();
  };

  // Función para ir a un slide específico
  const goToSlide = (i) => {
    currentSlide = i;
    timer();
  };

  let interval;
  const timer = () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, duration);
  };

  // Función para actualizar la altura del slider
  const updateSliderHeight = () => {
    const activeSlide = document.querySelector(`#service-${currentSlide}`);
    if (activeSlide && sliderElement) {
      // Obtener altura real del slide actual
      const slideHeight = activeSlide.scrollHeight; // Altura total del contenido del slide
      sliderElement.style.height = `${slideHeight}px`;
    }
  };

  // Llamar a la función después de montar el componente
  onMount(() => {
    updateSliderHeight();
    timer();

    // Escuchar el redimensionamiento de la ventana
    window.addEventListener("resize", updateSliderHeight);
  });

  // Limpiar el evento cuando el componente se destruya
  onDestroy(() => {
    window.removeEventListener("resize", updateSliderHeight);
  });

  // Actualizar la altura después de cada cambio en currentSlide
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
    width: 80%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(100% + 10px);
    right: 30px;
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
    width: 80%;
    margin: 0 30px 0 auto;
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
  .card-body p {
    font-size: 1rem;
  }
</style>
