<script>
    import { contactModal } from "../store/modal";
    import { fade } from "svelte/transition";

    let visible = false;

    contactModal.visible.subscribe((value) => {
        visible = value;
    });

    const handleClose = ()=>{
        contactModal.setVisible(false);
    };
</script>

{#if visible}
    <div class="container" transition:fade>
        <div class="modal">
            <div class="header">
                <button aria-label="close modal" class="close-modal" onclick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
                <h2>Contact Form</h2>
            </div>
            <div class="body">
                <form>
                    <div class="wrapper">
                        <label>
                            <input type="text" required="required" />
                            <span>Full Name</span>
                        </label>
                        <label>
                            <input type="email" required="required" placeholder=" " />
                            <span>Email</span>
                        </label>

                        <label>
                            <textarea type="text" multiple required="required"></textarea>
                            <span>Message</span>
                        </label>

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
{/if}

<style>
    .container {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999999;
        padding: 5px;
    }

    .modal {
        background-color: white;
        border-radius: 30px;
        width: 50%;
        max-width: 600px;
        min-width: 300px;
    }

    .body {
        padding: 2%;
        box-sizing: border-box;
        
    }

    .header {
        border-bottom: 1px solid rgb(211, 211, 211);
        text-align: center;
        padding-top: 40px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        position: relative;
    }

    .close-modal{
        background-color: transparent;
        border: 0;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        opacity: 0.6;
        cursor: pointer;
        transition: transform 0.1s linear;
    }

    .close-modal:hover{
        transform: scale(1.1);
    }

    .close-modal svg{
        width: 100%;
        height: 100%;
    }

    .wrapper {
        max-width: 560px;
        margin: 0 auto;
        display: flex;
        gap: 35px;
        flex-flow: column nowrap;
        align-items: center;
    }

    textarea{
        border: 0;
        outline: 0;
        resize: none;
        min-height: 100px;
    }

    input, textarea{
        background-color: #82b4ec1c;
        border-radius: 50px;
        width: 100%;
    }

    label {
        padding-block: 0;
        padding-inline: 0;
        position: relative;
        flex: 1;
        width: 80%;
    }

    label > input, label > textarea {
        position: relative;
        border: none;
        border-bottom: 1px solid #9e9e9e;
        border-radius: 12px;
        outline: none;
        width: 100%;
        font-size: 16px;
        padding: 12px;
        box-shadow: none;
        box-sizing: border-box;
        transition: all 0.4s;
    }

    label > input:valid + span, label > textarea:valid + span {
        transform: translateY(-25px) scale(0.8);
        transform-origin: 0;
        top: 0;
        left: 0;
    }

    label > input:valid, label > textarea:valid {
        border-bottom: 1px solid #3f51b5;
        box-shadow: 0 1px 0 0 #3f51b5;
    }

    label > input[type="email"]:not(:placeholder-shown):invalid{
        border-bottom: 1px solid #79221c;
        box-shadow: 0 1px 0 0 #f34d41;
    }

    label > input[type="email"]:not(:placeholder-shown):invalid + span{
        transform: translateY(-25px) scale(0.8);
        transform-origin: 0;
        color:  #79221c;
        top: 0;
        left: 0;
    }

    label > span {
        color: #9e9e9e;
        position: absolute;
        top: 0px;
        left: 12px;
        font-size: 16px;
        cursor: text;
        transition: 0.2s ease-out;
        transform: translateY(8px);
    }

    label > input:focus + span, label > textarea:focus + span {
        transform: translateY(-25px) scale(0.8);
        transform-origin: 0;
        top: 0;
        left: 0;
        color: #3f51b5;
    }

    label > input:focus, label > textarea:focus {
        border-bottom: 1px solid #3f51b5;
        box-shadow: 0 1px 0 0 #3f51b5;
    }

    button[type="submit"]{
        font-family: Poppins, sans-serif;
        border: none;
        background-color: rgb(80, 123, 204);
        color: white;
        padding: 5px 15px;
        font-size: 1rem;
        transition: background-color 0.18s ease;
        cursor: pointer;
        border-radius: 12px;
    }

    button[type="submit"]:hover{
        background-color: rgb(51, 103, 201);        
    }

</style>
