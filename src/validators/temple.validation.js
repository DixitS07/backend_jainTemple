const Joi = require('joi');

export const templeRegister =  {
    body: Joi.object().keys({
        name: Joi.string().required(),
        phoneNumber: Joi.object({
            Phonenumber1: Joi.string().allow(""),
            Phonenumber2: Joi.string().allow(""),
            }),
        address: Joi.object({
            line_1: Joi.string().allow(""),
            line_2: Joi.string().allow(""),
            line_3: Joi.string().allow(""),
            city: Joi.string().allow(""),
            state: Joi.string().allow(""),
            pincode: Joi.number().allow(""),
            country: Joi.string().allow(""),
        }),
        homepageInfo: Joi.object({
            title: Joi.string().allow(""),
            description: Joi.string().allow(""),
            homePhoto: Joi.string().allow(""),
        }),
        aboutPageInfo: Joi.object({
            title: Joi.string().allow(""),
            description: Joi.string().allow(""),
        }),
        historyPageInfo: Joi.object({
            title: Joi.string().allow(""),
            description: Joi.string().allow(""),
        }),
        mediaPageInfo: Joi.array().items(
            Joi.object({
            title: Joi.string().allow(""),
            description: Joi.string().allow(""),
            mediaPhoto: Joi.string().allow(""),
            })
        ),
        blogPageInfo: Joi.array().items(
            Joi.object({
            title: Joi.string().allow(""),
            description: Joi.string().allow(""),
            blogPhoto: Joi.string().allow(""),
            })
        ),
        newsPageInfo: Joi.array().items(
        Joi.object({
            newstitle: Joi.string().allow(""),
            newsdescription: Joi.string().allow(""),
            newsmediaPhoto: Joi.string().allow(""),
            })
        ),
        commiteMemberInfo: Joi.array().items(
            Joi.object({
            memeberName: Joi.string().allow(""),
            memeberPhoto: Joi.string().allow(""),
            })
        ),
        mandirVediosInfo: Joi.array().items(
            Joi.object({
            title: Joi.string().allow(""),
            description: Joi.string().allow(""),
            VedioId: Joi.string().allow(""),
            })
        ),
        liveVediosInfo: Joi.array().items(
            Joi.object({
            title: Joi.string().allow(""),
            description: Joi.string().allow(""),
            VedioId: Joi.string().allow(""),
            })
        ),
        bankInfo: Joi.object({
            bankName: Joi.string().allow(""),
            bankAccNo: Joi.string().allow(""),
            ifscCode: Joi.string().allow(""),
        }),
        barcode: Joi.object({
            barcode1: Joi.string().allow(""),
            barcode2: Joi.string().allow(""),
        }),
        artiTime: Joi.object({
            normalTiming: Joi.string().allow(""),
            eventTiming: Joi.string().allow(""),
        }),
        maharajJiInfo: Joi.array().items(
            Joi.object({
            maharajName: Joi.string().allow(""),
            maharajDescription: Joi.string().allow(""),
            maharajPhoto: Joi.string().allow(""),
            maharajTime: Joi.string().allow(""),
            }),
        ),
        contactPageInfo: Joi.array().items(
            Joi.object({
                name: Joi.string().allow(""),
                number: Joi.string().allow(""),
                email: Joi.string().allow(""),
                message:Joi.string().allow(""),
            }),
        ),
        eventPageInfo: Joi.array().items(
            Joi.object({
                title: Joi.string().allow(""),
                description: Joi.string().allow(""),
                eventPhoto:Joi.string().allow(""),
                date: Joi.date().iso().allow(""),
                guest:Joi.string().allow(""),
                host:Joi.string().allow(""),
                rsvp:Joi.string().allow(""),
            }),
        ),
    })
};
 