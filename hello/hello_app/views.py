from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status

    
class HelloApiView(APIView):
    def get(self,request):
        my_name=request.GET.get('name',None)
        if my_name:
            retValue={}
            retValue['data']="Hello"+my_name
            return Response(retValue,status=status.HTTP_200_OK)
        else:
            return Response(
                {"res":"parameter:name is none"},
                status=status.HTTP_400_BAD_REQUEST
            )

# Create your views here.
