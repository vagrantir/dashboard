export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}
export function newModel(name, model, payload){
    window.Models = window.Models || {}
    window.Models[name] = model
    return model(payload)
}
