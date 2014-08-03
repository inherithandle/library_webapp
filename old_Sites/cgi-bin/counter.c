#include <stdio.h>

int counter();
int main()
{
	int count;
	count = counter();
	printf("Content-type:text/html\n\n");
	printf("<html><body>");
	printf("You are %d visitor!!!<br>",count);
	printf("</body></html>");
	
	return 0;
}
	
int counter()
{
	FILE* fp;
	int count;
	fp = fopen("count.dat", "r");
	
	fscanf(fp, "%d", &count);
	count++;
	fclose(fp);
	
	
	fp = fopen("count.dat", "w");
	fprintf(fp, "%d",count);
	fclose(fp);
	return count;
}