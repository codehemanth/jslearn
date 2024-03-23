console.log("Hemanth is learing javascript")

/*
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.


Rseserved Words

abstract	arguments	await*	boolean
break	byte	case	catch
char	class*	const*	continue
debugger	default	delete	do
double	else	enum*	eval
export*	extends*	false	final
finally	float	for	function
goto	if	implements	import*
in	instanceof	int	interface
let*	long	native	new
null	package	private	protected
public	return	short	static
super*	switch	synchronized	this
throw	throws	transient	true
try	typeof	var	void
volatile	while	with	yield
*/

const accountId = 252525
var accountName = "Hemanth"
let accountEmail = "chemanthgopal@gmail.com"
accountPassword= "Jaipur" //never use this way of decleration
let accountstate;

// prefer not to use "var" because of block scope and functional scope
/*
multi comment useage
*/

console.log("account id is ",accountId)
console.table([accountEmail,accountId,accountName,accountPassword,accountstate])