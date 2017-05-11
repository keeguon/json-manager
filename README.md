# JSON Manager

JSON Manager is a small application which allows to create JSON files in your browser localStorage. It can then export those files in the localStorage for portability and then reimport this file elsewhere merging your existing data.

## A word on the stored data

Each "file" is represented as a JSON encoded string in the localStorage identified by a UUID (v4) key. As a result a generated export of your data should look similar to the following:

```json
{
  "c78d311f-978f-440e-9beb-187e723107c9": { "name": "test", "content": "[1, 2, 3]" },
  "4c2734f7-00bc-476d-ae7f-e5e787d363d6": { "name": "yadda", "content": "{\"key\":\"value\",\"int\":6}" }
}
```

## License

Copyright 2017 Félix Bellanger <felix.bellanger@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.