def readPolynomialFromUser():
    number_polynomials = int(input())
    P=[0 for i in range(number_polynomials)]
    for i in range(0,number_polynomials):
        index_p,index_c = input().split(' ')
        P[int(index_p)] = int(index_c)
    return P


def computePolynomialSum(A,B):
    if(len(A)>=len(B)):
        polynomials_sum=[0 for i in range(len(A))]
        for i in range(0,len(A)):
            if(i>=len(B)):
                B.append(0)
            polynomials_sum[i]=A[i]+B[i]
        return polynomials_sum


    return -1




A=readPolynomialFromUser()
B=readPolynomialFromUser()
polynomials_sum=computePolynomialSum(A,B)
if(polynomials_sum==-1):
    polynomials_sum=computePolynomialSum(B,A)

if(sum(polynomials_sum)!=0):
    for i in range(len(polynomials_sum)-1,0,-1):
        if polynomials_sum[i] != 0:
            if i!=1:
                if polynomials_sum[i]>0:
                    if i==len(polynomials_sum)-1:
                        #if polynomials_sum[i]<0:
                        #    polynomials_sum[i]=-1*polynomials_sum[i]
                        #    print (f' - {polynomials_sum[i]}x^{i}',end='')
                        #else: #redundent
                        if polynomials_sum[i]==1:
                            print (f'x^{i}',end='')
                        else:
                            print (f'{polynomials_sum[i]}x^{i}',end='')
                    else:
                        print (f' + {polynomials_sum[i]}x^{i}',end='')
                else:
                    if polynomials_sum[i]!=-1:
                        #if polynomials_sum[i]<0: #redundent
                        polynomials_sum[i]=-1*polynomials_sum[i]
                        if i==len(polynomials_sum)-1: #add p0 = i condition
                            print (f'-{polynomials_sum[i]}x^{i}',end='')
                        else:
                            print (f' - {polynomials_sum[i]}x^{i}',end='')
                    else:
                            if i==len(polynomials_sum)-1: #add p0 = i condition
                                print (f'-x^{i}',end='')
                            else:
                                print (f' - x^{i}',end='')
            else:
                if polynomials_sum[i]>0:
                    if i==len(polynomials_sum)-1: #add p0 = i condition
                        if polynomials_sum[i]==1:
                            print (f'x',end='')
                        else:
                            print (f'{polynomials_sum[i]}x',end='')
                    else:
                        if polynomials_sum[i]==1:
                            print (f' + x',end='')
                        else:
                            print (f' + {polynomials_sum[i]}x',end='')
                else:
                    #if polynomials_sum[i]<0: # redundent
                    polynomials_sum[i]=-1*polynomials_sum[i]
                    if i==len(polynomials_sum)-1: #add p0 = i condition
                        if polynomials_sum[i]==1:
                            print (f'-x',end='')
                        else:
                            print (f'-{polynomials_sum[i]}x',end='')
                    else:
                        if polynomials_sum[i]==1:
                            print (f' - x',end='')
                        else:
                            print (f' - {polynomials_sum[i]}x',end='')

    if polynomials_sum[0]<0:
        polynomials_sum[0]=-1*polynomials_sum[0]
        if len(polynomials_sum)-1 == 0: #add p0 = i condition
            print (f'-{polynomials_sum[0]}',end='')
        else:
            print (f' - {polynomials_sum[0]}',end='')
    else:
        if len(polynomials_sum)-1 == 0: #add p0 = i condition
            print (f'{polynomials_sum[0]}',end='')
        else:
            print (f' + {polynomials_sum[0]}',end='')
else:
    print(str(polynomials_sum[0]))