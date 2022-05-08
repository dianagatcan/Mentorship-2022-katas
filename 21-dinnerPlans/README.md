### 21 Dinner Plans

Two samurai generals are discussing dinner plans after a battle, but they can't seem to agree.

The discussion gets heated and you are cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to. Thus, the only thing left to do is find what the common ground of what they are saying is.

Compare the proposals using the function commonGround(str1, str2) that outputs a string containing the words in str1 that also occur in str2.

Each word in the resulting string shall occur once, and the order of the words follow the order of the first occurrence of each word in the first string.

If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")

#### Examples


```
commonGround('Something', 'Another opinion')
  => 'death'
```

```
commonGround('I think we should have beef', 'I think we should have tofu')
  => 'I think we should have'
```

```
commonGround('I think I fancy wine', 'I think I fancy beer')
  => 'I think fancy'
```
