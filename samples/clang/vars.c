int X;
int y;

f(double x)
{
    double y;
    ...
}

int sp = 0;
double val[MAXVAL];


int low, high, mid;

register int x;
register char c;

extern int sp;
extern double val[];

void push(double f) {/*...*/}

double pop(void) {/*...*/}

int x = 1, y = 2, z[10];
int *ip;      /* ip is a pointer to int */

ip = &x;      /* ip now points to x */
y = *ip;      /* y is now 1 */
*ip = 0;      /* x is now 0 */
ip = &z[O];   /* ip now points to z[O] */
