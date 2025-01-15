<script>
    let servicesNumber = 4;
    let current = 1;
    let order = [1, 2, 3, 4]
    setInterval(handleRotate, 6000)

    function handleRotate(){
        current++;
        if(current > servicesNumber){
            current = 1
        }      
        order.forEach((value, index)=>{
            let newOrder = value-1
            if(newOrder==0) newOrder = servicesNumber

            order[index] = newOrder 
        });         
    }
</script>

<style>
    .services{
        flex: 1;
        position: relative;
    }

    .service{
        border: 1px solid black;
        border-radius: 18px;
        position: relative;
        transition: top 0.6s linear,
        left 0.6s linear,
        right 0.6s linear,
        bottom 0.6s linear,
        transform 0.6s linear,
        width 0.6s linear;
        position: absolute;
        display: inline-block;
        min-width: calc(33% - 20px);
        width: calc(33% - 20px);
        top: 0;
        left: 0;
        aspect-ratio: 1/1;
    }

    .service.current{
        width: calc(100% - 40px);
    }

    .order-1{
        top: 0;
        left: 0;
    }

    .order-2{
        top: 500px;
        animation-delay: 5.2s;
    }

    .order-3{
        top: 500px;
        transform: translateX(calc(100% + 10px));
    }

    .order-4{
        top: 500px;
        transform: translateX(calc(200% + 20px));
    }

    .card-body{
        padding: 10px;
    }

    .service.current h5{
        text-align: center;
        margin-bottom: 0;
        margin-top: 0;
        font-size: 1.3rem;
    }

    .service.current .image{
        display: block;
    }
    h5{
        margin: 0;
        text-align: center;
        font-size: 1rem;
    }

    .card-body p{
        display: none;
    }

    .current .card-body p{
        display: block;
    }

    .image{
        width: 100%;
        object-fit: cover;
        aspect-ratio: 2/1;
        border-top-right-radius: 18px;
        border-top-left-radius: 18px;
        display: none;
    }

</style>

<!--HTML-->

<div class="services">
    <div class="service {current==1 ? "current" : ""} {`order-${order[0]}`}">
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
    <div class="service {current==2 ? "current" : ""} {`order-${order[1]}`}">
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
    <div class="service {current==3 ? "current" : ""} {`order-${order[2]}`}">
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
    <div class="service {current==4 ? "current" : ""} {`order-${order[3]}`}">
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