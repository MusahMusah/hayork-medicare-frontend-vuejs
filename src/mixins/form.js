export default {
    methods: {
        resetFormFields(object) {
            Object.keys(object).forEach(function(key, index) {
                object[key] = ''
            })
        },
        transformToFormData(object) {
            const formData = new FormData()
            Object.keys(object).forEach(key => formData.append(key, object[key]))
            return formData
        },
    }
}