const sleep = require('sleep');

module.exports = (scenario) => {
  scenario.runTape('get user address', async(t, {liza}) => {
    const Host_Doc = {
      host_doc:{
      kyc_proof: "DOC # QuarnnnnvltuenblergjasnvAfs"
    }}
    t.plan(2)
    const verified = liza.call("host", "register_as_host", Host_Doc);
    console.log("verified:: ",verified);
    t.equal(verified.Ok.length, 46)

    sleep.sleep(5);
    const is_verified = liza.call("host", "is_registered_as_host", {});
    console.log("is verified?:: ",is_verified);
    t.equal(is_verified.Ok.links.length, 1)
  })
}
