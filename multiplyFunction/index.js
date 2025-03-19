module.exports = async function (context, req) {
    context.log("Multiply function processed a request.");

    // Extract and validate numbers from query parameters
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        context.res = {
            status: 400,
            body: { error: "Please provide valid numbers as query parameters: num1 and num2." }
        };
        return;
    }

    // Calculate the product
    const product = num1 * num2;

    // Return response
    context.res = {
        status: 200,
        body: { product }
    };
};
