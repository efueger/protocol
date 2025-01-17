class Rule<RuleType = any> {
  private _rules: RuleType;
  private _type: string;

  constructor(type: string, rules: RuleType) {
    this._rules = rules;
    this._type = type;
  }

  set rules(rules: RuleType) {
    this._rules = rules;
  }

  get rules() {
    // TODO: ensure immutability
    return this._rules;
  }

  get type() {
    return this._type;
  }

  changeType<RuleType = any>(type: string, rules: RuleType) {
    this._type = type;
    this._rules = rules as any;
  }

  pack() {
    return {
      type: this.type,
      rules: this.rules,
    };
  }
}

export default Rule;
