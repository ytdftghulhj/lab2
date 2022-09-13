rost=float(input())
ves=float(input())
kolsh=float(input())
vrema=float(input())
dlsh=rost/4+0.37
dist=kolsh*dlsh
distk=dist/1000
skorost=dist/(vrema*60)
racshE=0.035*ves+(skorost**2/rost)*0.029*ves
kall=racshE*vrema
print("Пройденная дистанция в метрах:",distk*1000)
print("Количество сожженных калорий:",kall)
print("Пройденная дистанция в киллометрах",distk)
if distk<2:
  print("Старайтесь лучше")
elif distk<4:
  print("Продолжайте в том же духе")
else:
  print("Хорошая работа!")