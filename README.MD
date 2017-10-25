# TS Metrics - Core

Computes complexity in TypeScript / JavaScript files.

Example usage:
```TypeScript
import * as ts from 'typescript';
import {IMetricsModel, IMetricsParseResult} from 'tsmetrics-core';
import {MetricsParser} from 'tsmetrics-core/MetricsParser';
import {MetricsConfiguration} from 'tsmetrics-core/MetricsConfiguration';

export class ExampleUsage {

    public getMetrics(filePath: string) {
        var metricsForFile: IMetricsParseResult = MetricsParser.getMetrics(filePath, new MetricsConfiguration(), ts.ScriptTarget.ES5);
        this.log(metricsForFile.metrics, "");
    }

    private log(model: IMetricsModel, level: string) {
        console.log(model.toLogString(level));
        model.children.forEach(element => {
            this.log(element, level + "  ");
        });
    }
}

```

### Background

The goal of this package is to estimate the complexity of a target codebade. "Complexity" refers to [Cyclomatic Complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity), "a quantitative measure of the number of linearly independent paths through a program's source code."

This is implemented by summing over the weights (defined in `MetricsConfiguration.ts`) assigned to tokens in the target codebase.

### Target Languages

Currently, TSMetrics supports complexity analysis of TypeScript files (including JavScript)(I don't know if this is true, of if this actually supports any properly formatted AST)

### License

Licensed under MIT
