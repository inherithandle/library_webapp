#include <stdio.h>
#include <stdlib.h>

int main()
{
	printf("Content-type:text/html\n\n");
	printf("<html><body>");
	printf("passed query : %s \n", getenv("QUERY_STRING"));
	printf("</body></html>");
	
	return 0;
}