const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(2)
        .max(20)
        .required(),
    age: Joi.number()
        .integer()
        .required()
})

describe('test', () => {
    it('should validate', () => {
        const validObject = {
            name: 'Adriano',
            age: 33
        }
        expect(schema.validate(validObject)).toEqual({ value: validObject })

        const invalidObject = { name: 'Bruno' }
        const result = schema.validate(invalidObject)
        expect(result).toHaveProperty('error')
    })
})