
#class HelloApiView(APIView):
#    def get(self,request):
#        my_name=request.GET.get('name',None)
#        if my_name:
#            retValue={}
#            retValue['data']="Hello"+my_name
#            return Response(retValue,status=status.HTTP_200_OK)
#        else:
#            return Response(
#                {"res":"parameter:name is none"},
#                status=status.HTTP_400_BAD_REQUEST
#           )

from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging
from django.http import JsonResponse
from .models import Course  


logger = logging.getLogger('django') 

@api_view(['GET'])
def add_course(request):
    Department=request.GET.get('Department','')
    CourseTitle=request.GET.get('CourseTitle','')
    Instructor=request.GET.get('Instructor','')
    
    new_post = Course()
    new_post.Department = Department
    new_post.CourseTitle = CourseTitle
    new_post.Instructor = Instructor
    new_post.save()
    logger.debug("*********myhello_api:"+Department)
    if Department:
        return Response({"data":Department+"insert"},status=status.HTTP_200_OK)
    else:
        return Response(
            {"res":"parameter:anme is None"},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['GET'])
def list_course(request):
    posts = Course.objects.all().values("Department", "CourseTitle", "Instructor")
    return Response(list(posts))
    #return Response({"data":
             #       json.dumps(
                   #     list(posts),
                    #    sort_keys = True,
                   #     indent = 1,
                    #    cls = DjangoJSONEncoder)},
                  #      status.HTTP_200_OK)

def delete_course(request):
    if request.method in ["DELETE", "GET"]:  # 允許 GET 和 DELETE 方法
        department = request.GET.get("Department", "")

        deleted_count, _ = Course.objects.filter(Department=department).delete()
        if deleted_count > 0:
            return JsonResponse({"message": f"{deleted_count} 筆課程已刪除"})
        else:
            return JsonResponse({"error": "未找到匹配的課程"}, status=404)

    return JsonResponse({"error": "僅支持 DELETE 或 GET 方法"}, status=405)