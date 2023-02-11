import { ref, reactive } from "@vue/reactivity";

const colorManager = () => {
        const colors = ["green", "red", "blue", "purple"];
    let message = ref("Pick a color...");
    
    return {colors, message}
}

export default colorManager;