let interval
let defaultColor

const mouseover = (event) => {
    event.target.style.color = 'blue'
}
const mouseout = (event) => {
    event.target.style.color = defaultColor
}

export default {
    mounted(el, binding) {
        console.log('binding', binding)
        el.style[binding.arg] = binding.value

        if (binding.modifiers.blink) {
            let flag = true
            interval = setInterval(() => {
                el.style.color = flag ? '#fff' : binding.value
                flag = !flag
            }, 500)
        }

        if (binding.modifiers.hover) {
            defaultColor = binding.value
            el.addEventListener('mouseover', mouseover)
            el.addEventListener('mouseout', mouseout)
        }
    },
    updated(el, binding) {
        el.style[binding.arg] = binding.value

        if (binding.modifiers.blink) {
            let flag = true
            clearInterval(interval)
            interval = setInterval(() => {
                el.style.color = flag ? '#fff' : binding.value
                flag = !flag
            }, 500)
        }
    },
    unmounted(el) {
        interval && clearInterval(interval)
        el.removeEventListener('mouseover', mouseover)
        el.removeEventListener('mouseout', mouseout)
    }
}
