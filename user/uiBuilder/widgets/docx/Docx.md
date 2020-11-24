[< Widgets](../Widgets.md)

# Docx Builder

Adds a button to download a custom report made using a docx template.

## Templates

We use [docxtemplater](https://docxtemplater.com/) to create the the reports.

### Basic Use

Reference a field:\
`{field name}`

Create a loop:

```
{#data collection}
  ...
{/data collection}
```

Insert an image:\
`{%image field}`

Insert the Sum of a field:\
`{$sum?number field}`

See [docxtemplater](https://docxtemplater.com/) for examples and advanced use.

## Properties

### Data

**Data Source** - Choose the data collections to load into the docx template. Unlike other widgets multiple data sources can be added.

### Template File

**DOCX file** - Upload your template file.

**Filename** - Change the filename for the reports created and downloaded.

### Language

**Language** -

> TODO - what does this change?

### Customize Display:

**Label** - Change the text shown on the report download button.

**Width** - Adjust the button width

**Page background** - Change the widget background color.

**Button Position** - Choose to position the button left, center, or right.
