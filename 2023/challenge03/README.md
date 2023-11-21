# El Cifrado Espía


Un grupo de espías ha descubierto que su sistema de cifrado de mensajes está comprometido.

Han encontrado algunas contraseñas que no cumplen con la Política de Seguridad de Cifrado que tenían establecida cuando fueron creadas.

Para solucionar el problema, han creado una lista (tu entrada al desafío) de contraseñas (según la base de datos corrupta) y la política de seguridad cuando esa clave fue establecida.

## Ejemplos


```
2-4 f: fgff
4-6 z: zzzsg
1-6 h: hhhhhh
```
Cada línea indica, separado por **:**, la política de la clave y la clave misma.

La política de la clave especifica el número mínimo y máximo de veces que un carácter dado debe aparecer para que la clave sea válida. 
Por ejemplo, **2-4 f** significa que la clave debe contener **f al menos 2 veces** y **como máximo 4 veces**.

Sabiendo esto, en el ejemplo anterior, hay 2 claves válidas:

La segunda clave, **zzzsg**, no lo es; contiene 3 veces la letra z, pero necesita al menos 4. 

Las primeras y terceras claves son válidas: contienen la cantidad adecuada de f y h, respectivamente, según sus políticas.

## Tu desafío

Determina cuántas claves de cifrado son válidas según sus políticas.

## Cómo resolverlo

1. Analiza la lista de políticas y claves de cifrado que encontrarás en este archivo: https://codember.dev/data/encryption_policies.txt

2. Crea un programa que devuelva la clave inválida número 42 (de todas las claves inválidas, la 42ª en orden de aparición). Por ejemplo:
```bash
submit bqamidgewtbuz
```