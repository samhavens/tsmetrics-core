import * as ts from 'typescript';

export interface IMetricsParseResult {
    file: string;
    metrics: IMetricsModel;
}

export interface IMetricsParser {
    getMetrics(fileName: string, configuration: IMetricsConfiguration, target: ts.ScriptTarget): IMetricsParseResult;
    getMetricsFromText(fileName: string, content: string, configuration: IMetricsConfiguration, target: ts.ScriptTarget): IMetricsParseResult;
}

export interface IMetricsConfiguration {
    MetricsForClassDeclarationsToggled?: boolean;
    MetricsForConstructorDescriptionsToggled?: boolean;
    MetricsForEnumDeclarationDescriptionsToggled?: boolean;
    MetricsForFunctionDeclarationsToggled?: boolean;
    MetricsForFunctionExpressionsToggled?: boolean;
    MetricsForMethodDeclarationsToggled?: boolean;
    MetricsForArrowFunctionsToggled?: boolean;
    ComplexityLevelExtreme?: number;
    ComplexityLevelHigh?: number;
    ComplexityLevelNormal?: number;
    ComplexityLevelLow?: number;
    CodeLensHiddenUnder?: number;
    ComplexityLevelExtremeDescription?: string;
    ComplexityLevelHighDescription?: string;
    ComplexityLevelNormalDescription?: string;
    ComplexityLevelLowDescription?: string;
    ComplexityTemplate?: string;
    AnyKeyword?: number;
    AnyKeywordDescription?: string;
    ArrayBindingPattern?: number;
    ArrayBindingPatternDescription?: string;
    ArrayLiteralExpression?: number;
    ArrayLiteralExpressionDescription?: string;
    ArrowFunction?: number;
    ArrowFunctionDescription?: string;
    BinaryExpression?: number;
    BinaryExpressionDescription?: string;
    BindingElement?: number;
    BindingElementDescription?: string;
    Block?: number;
    BlockDescription?: string;
    BreakStatement?: number;
    BreakStatementDescription?: string;
    CallExpression?: number;
    CallExpressionDescription?: string;
    CallSignature?: number;
    CallSignatureDescription?: string;
    CaseClause?: number;
    CaseClauseDescription?: string;
    ClassDeclaration?: number;
    ClassDeclarationDescription?: string;
    CatchClause?: number;
    CatchClauseDescription?: string;
    ConditionalExpression?: number;
    ConditionalExpressionDescription?: string;
    Constructor?: number;
    ConstructorDescription?: string;
    ConstructorType?: number;
    ConstructorTypeDescription?: string;
    ContinueStatement?: number;
    ContinueStatementDescription?: string;
    DebuggerStatement?: number;
    DebuggerStatementDescription?: string;
    DefaultClause?: number;
    DefaultClauseDescription?: string;
    DoStatement?: number;
    DoStatementDescription?: string;
    ElementAccessExpression?: number;
    ElementAccessExpressionDescription?: string;
    EnumDeclaration?: number;
    EnumDeclarationDescription?: string;
    ExportAssignment?: number;
    ExportAssignmentDescription?: string;
    ExpressionStatement?: number;
    ExpressionStatementDescription?: string;
    ForStatement?: number;
    ForStatementDescription?: string;
    ForInStatement?: number;
    ForInStatementDescription?: string;
    ForOfStatement?: number;
    ForOfStatementDescription?: string;
    FunctionDeclaration?: number;
    FunctionDeclarationDescription?: string;
    FunctionExpression?: number;
    FunctionExpressionDescription?: string;
    FunctionType?: number;
    FunctionTypeDescription?: string;
    GetAccessor?: number;
    GetAccessorDescription?: string;
    Identifier?: number;
    IdentifierDescription?: string;
    IfWithElseStatement?: number;
    IfWithElseStatementDescription?: string;
    IfStatement?: number;
    IfStatementDescription?: string;
    ImportDeclaration?: number;
    ImportDeclarationDescription?: string;
    ImportEqualsDeclaration?: number;
    ImportEqualsDeclarationDescription?: string;
    IndexSignature?: number;
    IndexSignatureDescription?: string;
    InterfaceDeclaration?: number;
    InterfaceDeclarationDescription?: string;
    JsxElement?: number;
    JsxElementDescription?: string;
    JsxSelfClosingElement?: number;
    JsxSelfClosingElementDescription?: string;
    LabeledStatement?: number;
    LabeledStatementDescription?: string;
    MethodDeclaration?: number;
    MethodDeclarationDescription?: string;
    MethodSignature?: number;
    MethodSignatureDescription?: string;
    ModuleDeclaration?: number;
    ModuleDeclarationDescription?: string;
    NamedImports?: number;
    NamedImportsDescription?: string;
    NamespaceImport?: number;
    NamespaceImportDescription?: string;
    NewExpression?: number;
    NewExpressionDescription?: string;
    ObjectBindingPattern?: number;
    ObjectBindingPatternDescription?: string;
    ObjectLiteralExpression?: number;
    ObjectLiteralExpressionDescription?: string;
    Parameter?: number;
    ParameterDescription?: string;
    PostfixUnaryExpression?: number;
    PostfixUnaryExpressionDescription?: string;
    PrefixUnaryExpression?: number;
    PrefixUnaryExpressionDescription?: string;
    PropertyAccessExpression?: number;
    PropertyAccessExpressionDescription?: string;
    PropertyAssignment?: number;
    PropertyAssignmentDescription?: string;
    PropertyDeclaration?: number;
    PropertyDeclarationDescription?: string;
    PropertySignature?: number;
    PropertySignatureDescription?: string;
    RegularExpressionLiteral?: number;
    RegularExpressionLiteralDescription?: string;
    ReturnStatement?: number;
    ReturnStatementDescription?: string;
    SetAccessor?: number;
    SetAccessorDescription?: string;
    SourceFile?: number;
    SourceFileDescription?: string;
    StringLiteral?: number;
    StringLiteralDescription?: string;
    SwitchStatement?: number;
    SwitchStatementDescription?: string;
    TemplateExpression?: number;
    TemplateExpressionDescription?: string;
    ThrowStatement?: number;
    ThrowStatementDescription?: string;
    TryStatement?: number;
    TryStatementDescription?: string;
    TypeAssertionExpression?: number;
    TypeAssertionExpressionDescription?: string;
    TypeLiteral?: number;
    TypeLiteralDescription?: string;
    TypeReference?: number;
    TypeReferenceDescription?: string;
    VariableDeclaration?: number;
    VariableDeclarationDescription?: string;
    VariableStatement?: number;
    VariableStatementDescription?: string;
    WhileStatement?: number;
    WhileStatementDescription?: string;
    WithStatement?: number;
    WithStatementDescription?: string;
}

export interface IMetricsModel {
    line: number;
    column: number;
    complexity: number;
    visible: boolean;
    children: IMetricsModel[];
    description: string;
    start: number;
    end: number;
    text: string;
    getSumComplexity(): number;
    toLogString(level: string): string;
    toString(settings: IMetricsConfiguration): string;
    getExplanation(): string;
    clone(deepClone?: boolean): IMetricsModel;
}
