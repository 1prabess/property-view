from django.shortcuts import render
import pandas as pd
import json
from .models import Data

# Create your views here.
def property_view(request):
    if(request.method == "POST"):
        previous_data = Data.objects.all()
        previous_data.delete()

        file = request.FILES["file"]
        df = pd.read_csv(file)
        json_record = df.reset_index().to_json(orient="records")
        data = []
        data = json.loads(json_record)
        
        for d in data:
            name = d["property_name"]
            price = d["property_price"]
            rent = d["property_rent"]
            emi = d["emi"]
            tax = d["tax"]
            exp = d["other_exp"]
            monthly_expenses = emi + tax + exp
            monthly_income = rent - monthly_expenses

            dt = Data(name=name, price=price, rent=rent, emi=emi, tax=tax, exp=exp, monthly_expenses=monthly_expenses, monthly_income=monthly_income)
            dt.save()

        data_objects = Data.objects.all()

        context = {
            "data_objects" : data_objects,
        }

        return render(request, "myapp/index.html", context)
        
    else:
        print("Get Request Done")

    return render(request, "myapp/index.html")
