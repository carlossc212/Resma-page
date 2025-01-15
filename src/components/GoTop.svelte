<script>
    
    
    window.addEventListener("scroll", ()=>{
        console.log("hola");
        if(window.scrollY > 200){
            document.getElementById("go-top")?.classList.add("appear")
        }else{
            document.getElementById("go-top")?.classList.remove("appear")
        }
    });
</script>

<a aria-label="Go to the top of the page" href="#top" class="go-top" id="go-top">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
    </svg>
</a>

<style>
	.go-top{
		position: fixed;
		bottom: 20px;
		right: -20px;
		border-radius: 50%;
		aspect-ratio: 1/1;
		background-color: white;
		border: 1px solid gray;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		cursor: pointer;
		color: black;
		transition: 
			color 0.1s linear, 
			background-color 0.1s linear,
            right 0.1s linear,
			opacity 0.2s linear;
        opacity: 0;

	}

	.go-top:hover{
		color: white;
		background-color: black;
	}

	.go-top svg{
		width: 100%
	}

    :global(.appear){
        opacity: 1 !important;
        right: 20px !important;
    }
</style>