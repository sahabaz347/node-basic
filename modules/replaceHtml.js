module.exports=function(template,product){
    let output = template.replace('{{%%modelImage%%}}', product.image)
        output = output.replace('{{%%name%%}}', product.name)
        output = output.replace('{{%%modelName%%}}', product.modelName)
        output = output.replace('{{%%size%%}}', product.size)
        output = output.replace('{{%%camera%%}}', product.camera)
        output = output.replace('{{%%price%%}}', product.price)
        output = output.replace('{{%%color%%}}', product.color)
        output = output.replace('{{%%productName%%}}', product.productName)
        output = output.replace('{{%%id%%}}', product.id)
        output = output.replace('{{%%details%%}}', product.details)
        output = output.replace('{{%%description%%}}', product.description)
        return output;
}