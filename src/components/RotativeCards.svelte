<script>
    import { onMount } from 'svelte';

    let _services;
    const slider = {
        _index: 0,
        max: 0,
        services: [],
        current: null,
        next() {
            this._index++;
            if (this._index >= this.max) {
                this._index = 0;
            }

            if (this.current) {
                this.current.remove();
            }

            this.current = this.services[this._index];
            _services.appendChild(this.current);
        }
    };

    onMount(() => {
        // Inicializa los servicios
        slider.services = Array.from(_services.querySelectorAll('.service'));
        slider.max = slider.services.length;
        slider.current = slider.services[0];

        // Elimina todos los elementos del DOM y deja solo el actual
        slider.services.forEach(service => service.remove());
        _services.appendChild(slider.current);

        // Configura el intervalo para cambiar servicios
        setInterval(() => slider.next(), 3000);
    });
</script>

<style>
    .services{
        flex: 1;
    }

    .service{
        border: 1px solid black;
        border-radius: 20px;
    }

    .image{
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        aspect-ratio: 16/9;
        object-fit: cover;
    }

    .card-body{
        padding: 20px;
    }

    h5{
        text-align: center;
        font-size: 1.2rem;
        margin: 0;
    }

</style>

<!--HTML-->

<div bind:this={_services} class="services">
    <div class="service">
        <div class="card-header">
            <img class="image" src="/mobile-dev.jpg" alt="Mobile development">
        </div>
        <div class="card-body">
            <h5>Mobile Apps</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis architecto ad natus tempora beatae repudiandae repellat aliquid nihil, hic ut magnam dignissimos minus reprehenderit, quod sint nulla sit nisi.
            </p>
        </div>
        <div class="card-footer">

        </div>
    </div>
    <div class="service">
        <div class="card-header">
            <img class="image" src="/web-dev.jpg" alt="Mobile development">
        </div>
        <div class="card-body">
            <h5>Web Developement</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis architecto ad natus tempora beatae repudiandae repellat aliquid nihil, hic ut magnam dignissimos minus reprehenderit, quod sint nulla sit nisi.
            </p>
        </div>
        <div class="card-footer">

        </div>
    </div>
    <div class="service">
        <div class="card-header">
            <img class="image" src="/desktop-dev.jpg" alt="Mobile development">
        </div>
        <div class="card-body">
            <h5>Desktop Apps</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis architecto ad natus tempora beatae repudiandae repellat aliquid nihil, hic ut magnam dignissimos minus reprehenderit, quod sint nulla sit nisi.
            </p>
        </div>
        <div class="card-footer">

        </div>
    </div>
    <div class="service">
        <div class="card-header">
            <img class="image" src="/tech-consulting.jpg" alt="Mobile development">
        </div>
        <div class="card-body">
            <h5>Tech Consulting</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis architecto ad natus tempora beatae repudiandae repellat aliquid nihil, hic ut magnam dignissimos minus reprehenderit, quod sint nulla sit nisi.
            </p>
        </div>
        <div class="card-footer">

        </div>
    </div>
</div>