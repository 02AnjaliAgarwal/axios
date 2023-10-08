<script>

// javascript program to check if two numbers are bit rotations 
// of each other.


function isRotation(x, y)
{

	var x64 = x | (x << 32);
	while (x64 >= y) 
	{
	
		// comapring only last 32 bits 
		if (x64 == y) {
			return true;
		}

		// right shift by 1 unit 
		x64 >>= 1;
	}
	return false;
}

// driver code to test above function 
var x = 122;
var y = 2147483678;

if (isRotation(x, y) == false) {
	document.write("Yes");
} else {
	document.write("No");
}
</script>
