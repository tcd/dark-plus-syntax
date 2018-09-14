#include <stdio.h>
#include <stdlib.h>

int main()
{
    int c;
    FILE *file;
    file = fopen("hello.txt", "r");

    if(file == NULL)
    {
        printf("Error!");
        exit(1);
    }

    if (file)
    {
        while((c = getc(file)) != EOF)
            putchar(c);
        fclose(file);
    }

    return 0;
}
