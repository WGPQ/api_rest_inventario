const app=require('./server');
app.set('port',process.env.PORT || 3000);
async function main(){
    await app.listen(app.get('port'),()=>{
console.log('Esta api se esta ejecutando en el puerto',app.get('port'));
    });
}

main();