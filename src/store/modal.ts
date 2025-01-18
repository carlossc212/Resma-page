import { atom } from "nanostores"

export const contactModal = {
    visible: atom(false),
    setVisible: function(value:boolean){this.visible.set(value);}
}