obj1 = {
	firstName: "Витя",
	lastName: "Киселёв",
	age: 45,
	children: null,
	dates: {
		birthday: '26.01.1977',
		wedding: '05.09.2000',
		graduationFromUniversity: '07.06.2003',
	}
}
function showObject (obj,prop=null)
{
    for (let key in obj) {
		if(typeof obj[key] !== "object"|| obj[key] ==null)
		{
			console.log(`${prop? prop.toString()+"-":""}${[key]} - ${obj[key]}`)
		}
		else
		{
			showObject(obj[key],key)
		}
    }

}

showObject(obj1)



